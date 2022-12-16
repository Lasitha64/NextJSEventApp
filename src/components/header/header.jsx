import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image
            alt="logo"
            src={
              "data:image/png;base64,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"
            }
            width={50}
            height={50}
          />
          <nav>
            <ul>
              <li>
                <Link href="/" legacyBehavior>
                  <a> Home</a>
                </Link>
              </li>
              <li>
                <Link href="/events" legacyBehavior>
                  <a> Events</a>
                </Link>
              </li>
              <li>
                <Link href="/about-us" legacyBehavior>
                  <a> About us</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title"> Sed ut perspiciatis unde omnis</p>
      </div>
    </header>
  );
};
