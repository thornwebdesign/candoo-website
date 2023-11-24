
interface LinkInterface {
    title: string
    route: string
    menus: string[]
}

const links: LinkInterface[] = [
    {

        title: "Consumers",
        route: "/consumers",
        menus: ['tech']
    },
    {
        title: "Enterprises",
        route: "/enterprises",
        menus: ['tech']

    },
    {
        title: "In the News",
        route: "/in-the-news",
        menus: ['tech']

    },
    {
        title: "Blog",
        route: "/blog",
        menus: ['tech']

    },
    {
        title: "Resources",
        route: "/resources",
        menus: ['tech']

    },
    {
        title: "Media Resources",
        route: "/media-resources",
        menus: ['tech']
    },
    {
        title: "About",
        route: "/about",
        menus: ['team']
    },
    {
        title: "Careers",
        route: "/careers",
        menus: ['team']
    },
    {
        title: "Partners",
        route: "/partners",
        menus: ['team']
    },
    {
        title: "Members Support",
        route: "/members-support",
        menus: ['support']
    },
    {
        title: "FAQ",
        route: "/faq",
        menus: ['support']
    },
    {
        title: "Safety & Security",
        route: "/safety-security",
        menus: ['support']
    },
    {
        title: "Privacy Policy",
        route: "/privacy-policy",
        menus: ['support']
    },
    {
        title: "Terms of Use",
        route: "/terms-of-use",
        menus: ['support']
    },
    {
        title: "support@candootech.com",
        route: "/supportatcandootech.com",
        menus: ['support']
    },
    {
        title: "phone",
        route: "/partners",
        menus: ['support']
    },
]


function FooterSection() {

    return (
        <div className="container-fluid footer">
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <div className="row">
                            <div className="col">
                                <h3>Candoo Tech</h3>
                                <ul className="text-primary">
                                    {links.filter(l => l.menus.includes('tech')).map(link => (
                                        <li className="nav-item">
                                            <a href={link.route} className="nav-link text-primary">{link.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col">
                                <h3>Team</h3>
                                <ul className="text-primary">
                                    {links.filter(l => l.menus.includes('team')).map(link => (
                                        <li className="nav-item">
                                            <a href={link.route} className="nav-link text-primary">{link.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col">
                                <h3>Support</h3>
                                <ul className="text-primary">
                                    {links.filter(l => l.menus.includes('support')).map(link => (
                                        <li className="nav-item">
                                            <a href={link.route} className="nav-link text-primary">{link.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="bg-light p-5">
                            <div className="text-center">
                                <h2>Subscribe to our Newsletter</h2>
                                <p>Join our newsletter to get the latest news and tips.</p>
                                <div className="d-flex flex-row justify-content-center align-center">
                                    <input type="email" style={{
                                        maxWidth: '220px'
                                    }} className="form-control me-2" placeholder="Email addresss" />
                                    <div className="btn btn-secondary text-light px-4 py-2">Submit</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterSection