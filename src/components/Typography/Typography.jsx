function Typography({ children, fontSize, bold, marginTop, marginBottom }) {
  return (
    <div
      style={{
        fontSize: fontSize,
        fontWeight: bold ? "bold" : "normal",
        marginTop: marginTop,
        marginBottom: marginBottom,
      }}>
      {children}
    </div>
  );
}

export default Typography;
