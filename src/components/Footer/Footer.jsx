import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        جميع الحقوق محفوظة <span className="text-primary" > ساطع </span> &copy; {(new Date().getFullYear())}
      </p>
    </footer>
  );
}
