import classnames from "classnames";

export default function getTextClass(size) {
  return classnames({
    "text-sm": size === "sm",
    "text-base": size === "md",
    "text-lg": size === "lg"
  });
}
