function Typography({ children, fontSize, bold, marginTop }) {
  return (
    <div
      style={{
        fontSize: fontSize,
        fontWeight: bold ? "bold" : "normal",
        marginTop: marginTop,
      }}>
      {children}
    </div>
  );
}

export default Typography;
