function Footer() {
    return <footer className="page-footer blue accent-1">
        <div className="footer-copyright ">
            <div className="container">
                © {new Date().getFullYear()} Lesya Osokina TKBO-01-21
                <a className="grey-text text-lighten-4 right" href="#!">Repository</a>
            </div>
        </div>
    </footer>
}
export { Footer };