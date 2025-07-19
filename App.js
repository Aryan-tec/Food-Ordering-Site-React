const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is heading 1"),
    React.createElement("h2", {}, "this is heading 2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is heading 1"),
    React.createElement("h2", {}, "this is heading 2"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
