import Link from "next/link";

export default function GlobalFooter() {
  return (
    <div className="global-footer">
      <footer>
        <h1 className="logo"><Link href="#">SHAM<span>MAH</span></Link></h1>
      </footer>
    </div>
  );
}
