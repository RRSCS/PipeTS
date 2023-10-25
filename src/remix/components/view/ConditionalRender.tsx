export default function Conditional({
  condition,
  children,
}: { condition: boolean } & Children) {
  if (condition) {
    return children;
  } else {
    return <></>;
  }
}
