import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M11.1 9l3.4-3.4c.3-.3.3-.8 0-1.1l-1.1-1.1c-.3-.3-.8-.3-1.1 0L9 6.9 5.6 3.5c-.3-.3-.8-.3-1.1 0l-1 1.1c-.3.3-.3.8 0 1.1L6.9 9l-3.4 3.4c-.3.3-.3.8 0 1.1l1.1 1.1c.3.3.8.3 1.1 0L9 11.1l3.4 3.4c.3.3.8.3 1.1 0l1.1-1.1c.3-.3.3-.8 0-1.1L11.1 9z" /></svg>;
  }

}