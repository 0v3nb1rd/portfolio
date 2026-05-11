import { useMemo } from "react";
import { type ArrayOfPrimitivesInputProps, set, unset } from "sanity";

type PrimitiveValue = string | number | boolean;

type StackOption = {
  title: string;
  value: string;
};

type StackOptionsInputProps = ArrayOfPrimitivesInputProps<PrimitiveValue>;

const styleElements: React.CSSProperties = {
  display: "grid",
  gap: "0.5rem",
  gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
  alignItems: "stretch",
  justifyItems: "stretch",
};

export function StackOptionsInput(props: StackOptionsInputProps) {
  const { value = [], onChange, readOnly, schemaType } = props;

  const options = useMemo<StackOption[]>(() => {
    const rawOptions = schemaType.options?.list ?? [];

    return rawOptions
      .map((entry) => {
        if (entry && typeof entry === "object" && "value" in entry && "title" in entry) {
          const typedValue = String((entry as { value: unknown }).value);
          const typedTitle = String((entry as { title: unknown }).title ?? typedValue);

          return {
            title: typedTitle,
            value: typedValue,
          } satisfies StackOption;
        }

        if (typeof entry === "string" || typeof entry === "number" || typeof entry === "boolean") {
          return {
            title: String(entry),
            value: String(entry),
          } satisfies StackOption;
        }

        return null;
      })
      .filter((option): option is StackOption => Boolean(option));
  }, [schemaType.options?.list]);

  const normalizedValue = value.filter((item): item is string => typeof item === "string");

  const handleToggle = (optionValue: string) => {
    if (readOnly) return;

    const exists = normalizedValue.includes(optionValue);
    const nextValue = exists
      ? normalizedValue.filter((item) => item !== optionValue)
      : [...normalizedValue, optionValue];

    onChange(nextValue.length ? set(nextValue) : unset());
  };

  if (options.length === 0) {
    return <p style={{ color: "var(--card-muted-fg-color)" }}>No stack options configured.</p>;
  }

  return (
    <div style={styleElements}>
      {options.map((option) => {
        const inputId = `${props.id}-${option.value}`;
        const checked = normalizedValue.includes(option.value);

        return (
          <label
            key={option.value}
            htmlFor={inputId}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.2rem",
              borderRadius: "0.5rem",
              backgroundColor: checked ? "var(--primary)" : "var(--background)",
              color: checked ? "var(--primary-foreground)" : "var(--foreground)",
            }}
          >
            <input
              id={inputId}
              type="checkbox"
              checked={checked}
              disabled={readOnly}
              onChange={() => handleToggle(option.value)}
            />
            <span>{option.title}</span>
          </label>
        );
      })}
    </div>
  );
}
