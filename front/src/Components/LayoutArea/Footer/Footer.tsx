import "./Footer.css";

function Footer(): JSX.Element {

    const date = new Date().toLocaleString();

    return (
        <div className="Footer">
			<p>All Right Reserved &copy; {date}</p>
        </div>
    );
}

export default Footer;
