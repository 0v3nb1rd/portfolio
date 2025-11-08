import { SvgProps } from "@/types";

export * from "./logo";
export * from "./tech-stack";
export * from "./bg-screen";

export const GithubSVG = (props: SvgProps) => {
  return (
    <svg role="img" width={50} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}>
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
};

export const SiteSVG = (props: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M10 4v4" />
      <path d="M2 8h20" />
      <path d="M6 4v4" />
    </svg>
  );
};

export const LinkedInSVG = (props: SvgProps) => {
  return (
    <svg role="img" width={50} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}>
      <title>LinkedIn</title>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
};

export const LinkSVG = (props: SvgProps) => {
  return (
    <svg
      width={50}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M9 15l6 -6"></path>
      <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"></path>
      <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"></path>
    </svg>
  );
};

export const LetterSVG = (props: SvgProps) => {
  return (
    <svg
      width={50}
      viewBox="0 0 32 24"
      fillRule="evenodd"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <title>Letter</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M30 20c0 .203-.039.395-.095.578L21 11l9-7v16ZM3.556 21.946l9.024-9.616L16 14.915l3.272-2.601 9.172 9.632c-.143.033-24.745.033-24.888 0ZM2 20V4l9 7-8.905 9.578A1.966 1.966 0 0 1 2 20ZM29 2 16 12 3 2h26Zm-1-2H4a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4Z"
      />
    </svg>
  );
};

export const ImgPlaceholderSVG = (props: SvgProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="680.764" height="528.354" viewBox="0 0 180.119 139.794" {...props}>
      <title>Image Placeholder</title>
      <g transform="translate(-13.59 -66.639)" paintOrder="fill markers stroke">
        <path fill="transparent" d="M13.591 66.639H193.71v139.794H13.591z" />
        <path d="m118.507 133.514-34.249 34.249-15.968-15.968-41.938 41.937H178.726z" opacity=".675" fill="currentColor" />
        <circle cx="58.217" cy="108.555" r="11.773" opacity=".675" fill="currentColor" />
        <path fill="none" d="M26.111 77.634h152.614v116.099H26.111z" />
      </g>
    </svg>
  );
};
