### Libraries

- using vite instead of CRA.
- tailwind docs extension
- tailwind prettier plugin to organise classname
- anchor link (on click page scrolls to certain position)
- framer motion
  - for slide in animations of Hero text
  - for active link highlighting on navbar using onViewportEnter
- deploying to cloudfare pages.

### APIs

- form using react hook (register,trigger,formstate) forms and FormSubmit (free email submits). adding validations and errors using the same.
- regex for email

### React

- use mediaQuery hook - for hamburger menu
- making a dynamic bg for navbar based on window scroll event and useeffect. Important to return the cleanup function so that memory leak type bugs don't happen.

### TS

- using @ with ts-nodes path module
- type vs interface use what is used in the project - imp to be uniform
- using enums also as types prevents string based bugs.
- using 'as' keyword when inference isn't working after some js mutation

### CSS

- using before for text and graphic backgrounds and overlays
- flex basis
- using flex and mediQuery hook for responsive layouts
- styling overlay for image.
- relative position and before selector for graphics will help in repsonsive layout.so outer div with relative then inner div with before selector styles of position absolute.

### Others

- tailwind custom config - colors, typography, gradients, background images, breakpoints
- default setup for font and css in index.css file
- importing directly from folder by using index file
- active link functionality (for navbar)
- folder organization
- Navbar is usually a tougher part of a website.
- using html semantics making google crawling better
- first everything on html then figure out layout
- using comments to make markup strucutre for UI
- Tailwind Styling not working properly on dev server but works properly once deployed.
