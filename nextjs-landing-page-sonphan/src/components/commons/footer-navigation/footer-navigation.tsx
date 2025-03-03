import { Typography } from "antd";

const navItems = [
  [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Our teams", href: "/teams" },
  ],
  [
    { name: "Whitepaper", href: "/whitepaper" },
    { name: "Marketplace", href: "/marketplace" },
    { name: "Roadmap", href: "/roadmap" },
  ],
  [
    { name: "FAQs", href: "/faqs" },
    { name: "News", href: "/news" },
    { name: "Community", href: "/community" },
  ],
];

const FooterNavigation = () => {
  return (
    <nav className=" text-white p-8">
      <h2 className="text-lg font-bold tracking-widest mb-4">NAVIGATION</h2>
      <div className="grid grid-cols-3 gap-4 text-lg">
        {navItems.map((column, index) => (
          <ul key={index} className="space-y-2">
            {column.map(({ name, href }) => (
              <li key={name}>
                <a href={href} className="block hover:underline">
                  <Typography className={"text-white"}>{name}</Typography>
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </nav>
  );
};
export default FooterNavigation;
