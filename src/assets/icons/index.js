import React from "react";
import { lightTheme } from "../../components/Theme";
import "./index.scss";

export const MenuItem = (props) =>{
  return (
    <svg
      fill="#ffffff"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="40px"
      height="40px"
    >
      <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
    </svg>
  );
}

export const Sun = (props) =>{
  return (
    <svg
      fill={props.theme === lightTheme ? "yellow" : null}
      height={30}
      width={30}
      x="0px"
      y="0px"
      viewBox="0 0 384 384"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M101.488 78.864L78.864 56.24c-6.24-6.248-16.384-6.248-22.624 0-6.248 6.248-6.248 16.376 0 22.624l22.624 22.624a15.923 15.923 0 0011.312 4.688c4.096 0 8.192-1.56 11.312-4.688 6.248-6.248 6.248-16.376 0-22.624zM48 176H16c-8.832 0-16 7.168-16 16s7.168 16 16 16h32c8.832 0 16-7.168 16-16s-7.168-16-16-16zM101.488 282.512c-6.24-6.248-16.384-6.248-22.624 0L56.24 305.136c-6.248 6.248-6.248 16.376 0 22.624 3.12 3.128 7.216 4.688 11.312 4.688s8.192-1.56 11.312-4.688l22.624-22.624c6.248-6.248 6.248-16.376 0-22.624zM192 320c-8.832 0-16 7.168-16 16v32c0 8.832 7.168 16 16 16s16-7.168 16-16v-32c0-8.832-7.168-16-16-16zM327.76 305.136l-22.624-22.624c-6.24-6.248-16.384-6.248-22.624 0-6.248 6.248-6.248 16.376 0 22.624l22.624 22.624c3.12 3.128 7.216 4.688 11.312 4.688s8.192-1.56 11.312-4.688c6.248-6.248 6.248-16.376 0-22.624zM368 176h-32c-8.832 0-16 7.168-16 16s7.168 16 16 16h32c8.832 0 16-7.168 16-16s-7.168-16-16-16zM327.76 56.24c-6.24-6.248-16.384-6.248-22.624 0l-22.624 22.624c-6.248 6.248-6.248 16.376 0 22.624 3.12 3.128 7.216 4.688 11.312 4.688s8.192-1.56 11.312-4.688l22.624-22.624c6.248-6.248 6.248-16.376 0-22.624zM192 0c-8.832 0-16 7.168-16 16v32c0 8.832 7.168 16 16 16s16-7.168 16-16V16c0-8.832-7.168-16-16-16zM192 88c-57.344 0-104 46.656-104 104s46.656 104 104 104 104-46.656 104-104S249.344 88 192 88zm0 176c-39.696 0-72-32.304-72-72s32.304-72 72-72 72 32.304 72 72-32.304 72-72 72z" />
    </svg>
  );
}

export const Moon = (props) => {
  return (
    <svg
      className="moon"
      x="0px"
      y="0px"
      height="25pt"
      width="25pt"
      viewBox="0 0 512.001 512.001"
      xmlSpace="preserve"
      {...props}
    >
      <path
        d="M367.924 8.521c70.94 127.548 25.05 288.445-102.49 359.385-79.869 44.425-177.026 44.425-256.895 0C79.572 495.352 240.478 541.08 367.924 470.047s173.174-231.939 102.141-359.385A264.164 264.164 0 00367.924 8.521z"
        fill={props.theme === lightTheme ? "#ccc" : "purple"}
      />
      <path
        d="M239.353 511.984c-98.886-.077-190.011-53.592-238.252-139.92-2.309-4.098-.869-9.296 3.229-11.605a8.541 8.541 0 018.384 0c123.442 68.622 279.141 24.181 347.763-99.27 42.951-77.262 42.951-171.232 0-248.494a8.528 8.528 0 013.28-11.596 8.516 8.516 0 018.324.009c131.536 73.368 178.696 239.471 105.328 371.007-48.139 86.319-139.221 139.826-238.056 139.869zM31.842 388.661c82.587 114.495 242.342 140.363 356.837 57.776S529.042 204.095 446.455 89.6a255.691 255.691 0 00-57.776-57.776c58.066 139.008-7.557 298.772-146.566 356.837a272.779 272.779 0 01-210.271 0z"
        fill="#231f20"
      />
    </svg>
  );
}

export const StarFilled = (props) => {
  return (
    <svg
      className="star"
      height="30pt"
      viewBox="0 -10 511.98685 511"
      width="30pt"
      {...props}
    >
      <path
        d="M510.652 185.902a27.158 27.158 0 00-23.425-18.71l-147.774-13.419-58.433-136.77C276.71 6.98 266.898.494 255.996.494s-20.715 6.487-25.023 16.534l-58.434 136.746-147.797 13.418A27.208 27.208 0 001.34 185.902c-3.371 10.368-.258 21.739 7.957 28.907l111.7 97.96-32.938 145.09c-2.41 10.668 1.73 21.696 10.582 28.094 4.757 3.438 10.324 5.188 15.937 5.188 4.84 0 9.64-1.305 13.95-3.883l127.468-76.184 127.422 76.184c9.324 5.61 21.078 5.097 29.91-1.305a27.223 27.223 0 0010.582-28.094l-32.937-145.09 111.699-97.94a27.224 27.224 0 007.98-28.927zm0 0"
        fill="#ffc107"
      />
    </svg>
  );
}

export const Star = (props) => {
  return (
    <svg
      className="star"
      onClick={props.onClick}
      height="28pt"
      viewBox="0 -10 511.98685 511"
      width="28pt"
      {...props}
    >
      <path d="M114.594 491.14c-5.61 0-11.18-1.75-15.934-5.187a27.223 27.223 0 01-10.582-28.094l32.938-145.09L9.312 214.81a27.188 27.188 0 01-7.976-28.907 27.208 27.208 0 0123.402-18.71l147.797-13.419L230.97 17.027C235.277 6.98 245.089.492 255.992.492s20.715 6.488 25.024 16.512l58.433 136.77 147.774 13.417c10.882.98 20.054 8.344 23.425 18.711 3.372 10.368.254 21.739-7.957 28.907L390.988 312.75l32.938 145.086c2.414 10.668-1.727 21.7-10.578 28.098-8.832 6.398-20.61 6.89-29.91 1.3l-127.446-76.16-127.445 76.203c-4.309 2.559-9.11 3.864-13.953 3.864zm141.398-112.874c4.844 0 9.64 1.3 13.953 3.859l120.278 71.938-31.086-136.942a27.21 27.21 0 018.62-26.516l105.473-92.5-139.543-12.671a27.18 27.18 0 01-22.613-16.493L255.992 39.895 200.844 168.96c-3.883 9.195-12.524 15.512-22.547 16.43L38.734 198.062l105.47 92.5c7.554 6.614 10.858 16.77 8.62 26.54l-31.062 136.937 120.277-71.914c4.309-2.559 9.11-3.86 13.953-3.86zm-84.586-221.848s0 .023-.023.043zm169.13-.063l.023.043c0-.023 0-.023-.024-.043zm0 0" />
    </svg>
  );
}

export const DetailsBf = (props) => {
  return (
    <svg
      className="bf"
      width="60px"
      height="60px"
      xmlns="http://www.w3.org/2000/svg"
      fill="grey"
      viewBox="0 0 24 24"
      stroke="none"
      color="black"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
      ></path>
    </svg>
  );
}

export const DetailsAf = (props) => {
  return (
    <svg
      x="0px"
      y="0px"
      height="32pt"
      width="32pt"
      viewBox="0 0 341.333 341.333"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M170.667 85.333c23.573 0 42.667-19.093 42.667-42.667C213.333 19.093 194.24 0 170.667 0S128 19.093 128 42.667c0 23.573 19.093 42.666 42.667 42.666zM170.667 128C147.093 128 128 147.093 128 170.667s19.093 42.667 42.667 42.667 42.667-19.093 42.667-42.667S194.24 128 170.667 128zM170.667 256C147.093 256 128 275.093 128 298.667c0 23.573 19.093 42.667 42.667 42.667s42.667-19.093 42.667-42.667C213.333 275.093 194.24 256 170.667 256z" />
    </svg>
  );
}

export const CaretDown = (props) => {
  return (
    <svg width="32px" height="32px" viewBox="0 0 292.362 292.362" {...props}>
      <path d="M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" />
    </svg>
  );
}

export const CaretUp = (props) => {
  return (
    <svg
      x="0px"
      y="0px"
      width="32px"
      height="32px"
      viewBox="0 0 292.362 292.361"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M286.935 197.287L159.028 69.381c-3.613-3.617-7.895-5.424-12.847-5.424s-9.233 1.807-12.85 5.424L5.424 197.287C1.807 200.904 0 205.186 0 210.134s1.807 9.233 5.424 12.847c3.621 3.617 7.902 5.425 12.85 5.425h255.813c4.949 0 9.233-1.808 12.848-5.425 3.613-3.613 5.427-7.898 5.427-12.847s-1.814-9.23-5.427-12.847z" />
    </svg>
  );
}

export const Delete = (props) => {
  return (
    <svg
      className="delete"
      height="30pt"
      viewBox="0 0 512 512"
      width="30pt"
      {...props}
    >
      <path
        d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zm0 0"
        fill="#adb3af"
      />

      <path
        className="inside"
        d="M291.355 256l75.368-75.367c9.765-9.766 9.765-25.594 0-35.356-9.762-9.765-25.59-9.761-35.356 0L256 220.645l-75.367-75.368c-9.766-9.765-25.594-9.765-35.356 0-9.765 9.762-9.765 25.59 0 35.356L220.645 256l-75.368 75.367c-9.765 9.766-9.765 25.594 0 35.356 4.88 4.882 11.278 7.324 17.676 7.324s12.797-2.442 17.68-7.324L256 291.355l75.367 75.372c4.883 4.878 11.281 7.32 17.68 7.32s12.797-2.442 17.68-7.32c9.761-9.766 9.761-25.594 0-35.356zm0 0"
        fill="white"
      />
    </svg>
  );
}

export const FileUpload = (props) => {
  return (
    <svg height={32} viewBox="0 0 64 64" width={32} {...props}>
      <path d="M23.414 21.414L30 14.828V44a2 2 0 004 0V14.828l6.586 6.586c.39.391.902.586 1.414.586s1.024-.195 1.414-.586a2 2 0 000-2.828l-10-10a2 2 0 00-2.828 0l-10 10a2 2 0 102.828 2.828z" />
      <path d="M50 40a2 2 0 00-2 2v8c0 1.103-.897 2-2 2H18c-1.103 0-2-.897-2-2v-8a2 2 0 00-4 0v8c0 3.309 2.691 6 6 6h28c3.309 0 6-2.691 6-6v-8a2 2 0 00-2-2z" />
    </svg>
  )
}

export const Close = (props) => {
  return (
    <svg height="24pt" viewBox="0 0 329.26933 329" width="24pt" {...props} fill="black">
      <path d="M194.8 164.77L323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.266 21.266 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.273 21.273 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0" />
    </svg>
  )
}
