import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M9 1a8 8 0 1 0 0 16A8 8 0 0 0 9 1zm-.005 3a2 2 0 0 1 .091 3.999h-.09A2 2 0 0 1 8.995 4zM8.8 9h.388c.696 0 1.38.185 1.982.535l.003.002c.256.149.502.32.715.526a7.099 7.099 0 0 1 1.758 2.728 5.988 5.988 0 0 1-9.298-.008 7.103 7.103 0 0 1 1.756-2.722c.212-.206.457-.376.713-.525A3.936 3.936 0 0 1 8.8 9z" /></svg>;
  }

}