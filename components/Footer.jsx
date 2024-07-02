import Link from 'next/link';
import logoFooter from "../public/images/logo_copcust_blanc.svg";
import tiktok from "../public/images/tiktok.png";
import instagram from "../public/images/instagram.png";
import pinterst from "../public/images/pinterest.png";
import copyright from "../public/images/copyright.png"
import Image from 'next/image';


export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-1">
                <div className="logo-footer">
                <Image src={logoFooter} alt="Logo footer" width={150}/>
                </div>
                <div className="rs">
                <Link href="/" passHref>
                    <Image src={tiktok} alt="Tiktok" width={30} height={30} />
                </Link>
                <Link href="/" passHref>
                    <Image src={instagram} alt="Instagram" width={30} height={30} />
                </Link>
                <Link href="/" passHref>
                    <Image src={pinterst} alt="Pinterest" width={30} height={30} />
                </Link>
                </div>
                
            </div>
            <div className="footer-2">
                    <div className="items items-1">
                        <p className="title-items">Acheter</p>
                        <ul>
                            <li>
                                <span> &gt; </span>
                                <Link href="/catalogue" passHref>Catalogue</Link>
                            </li>
                            <li>
                                <span> &gt; </span>
                                <Link href="/" passHref>Artistes</Link>
                            </li>
                            <li>
                                <span> &gt; </span>
                                <Link href="/" passHref>Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="items items-2">
                        <p className="title-items">Devenir Partenaire</p>
                        <ul>
                            <li>
                                <span> &gt; </span>
                                <Link href="/" passHref>Ouvrir sa boutique</Link>
                            </li>
                            <li>
                                <span> &gt; </span>
                                <Link href="/" passHref>Conseils</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="items items-3">
                        <p className="title-items">A propos</p>
                        <ul>
                            <li>
                                <span> &gt; </span>
                                <Link href="/" passHref>Condition générale de vente</Link>
                            </li>
                            <li>
                                <span> &gt; </span>
                                <Link href="/" passHref>Presse</Link>
                            </li>
                            <li>
                                <span> &gt; </span>
                                <Link href="/" passHref>Mentions légales</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="items items-3">
                        <p className="title-items">Aides</p>
                        <ul>
                            <li>
                                <span> &gt; </span>
                                <Link href="/" passHref>Centre d'aide</Link>
                            </li>
                            <li>
                                <span> &gt; </span>
                                <Link href="/" passHref>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-3">
                    <div className="left-footer">
                        <Image src={copyright} alt="Copyright" width={20} height={20} />
                        <p>2024 CopCust</p>
                    </div>
                    <div className="right-footer">
                        <ul>
                            <li>Condition d'utilisation</li>
                            <li>-</li>
                            <li>Confidentialité</li>
                            <li>-</li>
                            <li>Cookies</li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}