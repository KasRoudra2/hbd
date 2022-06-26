import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const greeting = useRef<HTMLDivElement>(null);
  const name = useRef<HTMLDivElement>(null);
  const greetingText = useRef<HTMLDivElement>(null);
  const wishText = useRef<HTMLDivElement>(null);
  const imagePath = useRef(null);
  const text1 = useRef<HTMLDivElement>(null);
  const textInChatBox = useRef<HTMLDivElement>(null);
  const sendButtonLabel = useRef<HTMLDivElement>(null);
  const text2 = useRef<HTMLDivElement>(null);
  const text3 = useRef<HTMLDivElement>(null);
  const text4 = useRef<HTMLDivElement>(null);
  const text4Adjective = useRef<HTMLDivElement>(null);
  const text5Entry = useRef<HTMLDivElement>(null);
  const text5Content = useRef<HTMLDivElement>(null);
  const smiley = useRef<HTMLDivElement>(null);
  const bigTextPart1 = useRef<HTMLDivElement>(null);
  const bigTextPart2 = useRef<HTMLDivElement>(null);
  const wishHeading = useRef<HTMLDivElement>(null);
  const outroText = useRef<HTMLDivElement>(null);
  const replayText = useRef<HTMLDivElement>(null);
  const outroSmiley = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<any>();
  const Input = ({myKey, val} : any) => {
    const [ value, setValue ] = useState(val);
    const handleChange = (e: any) => {
      setValue(e.target.value);
    }
    return (
      <div className="mt-3 mb-3 form-floating" key={myKey}>
        <input
          className="form-control"
          type="text"
          name={myKey}
          ref={eval(myKey)}
          value={value}
          placeholder={myKey}
          onChange={handleChange}
        />
        <label htmlFor={myKey}>{myKey}</label>
      </div>
    );
  };
  useEffect(() => {
    fetch("/api/details")
      .then((res) => res.json())
      .then((data) => {
        setData(Object.entries(data));
      })
      .catch((err) => console.log(err));
  }, []);

  const getUrl = () => {
    const mainUrl = window.location.href.split("/home")[0];
    let url = `${mainUrl}/wish?`;
    data &&
      data.forEach(([key, value]: any) => {
        const val = eval(key).current.value;
        if (val !== value) url += `&${key}=${encodeURIComponent(val)}`;
      });
    url = url.replace("?&", "?");
    return url;
  };
  const copyToClipboard = (text: string) => {
    var temp = document.createElement("input");
    ref?.current?.appendChild(temp);
    temp.value = text;
    temp.select();
    document.execCommand("copy");
    ref?.current?.removeChild(temp);
  };


  const handleCopy = (e: any) => {
    e.preventDefault();
    const url = getUrl();
    if (url) {
      copyToClipboard(url);
    }
  };
  const handleShorten = async (e: any) => {
    e.preventDefault();
    const url = getUrl();
    let response = "";
    if (url) {
      response = await (await fetch(url)).text();
      if (response.startsWith("https://")) {
        copyToClipboard(response);
        const win = window.open(response, "_blank");
        win?.focus();
      } else {
        response.startsWith("<")
          ? alert("Image shortener not available")
          : alert(response);
      }
    }
  };
  const handleGo = (e: any) => {
    e.preventDefault();
    const url = getUrl();
    if (url) {
      const win = window.open(url, "_blank");
      win?.focus();
    }
  };
  return (
    <div className={styles.main}>
      <Head>
        <meta
          name="Happy-BirthDay-Template"
          content="Happy-BirthDay-Template"
        />
        <meta property="og:title" content="Happy-BirthDay-Template App" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://happy-birthday-wish.herokuapp.com/"
        />
        <meta name="og:image" content="/desc.jpg" />
        <meta
          name="description"
          content="Wish your friend an awesome happy birthday!"
          property="og:description"
        />
        <meta name="description" content="/desc.jpg" property="og:image" />
        <meta
          name="keywords"
          content="Birthday, HBD, Happy Birthday, Template, Happy-BirthDay-Template, Happy-BirthDay-Template"
        />
        <meta name="author" content="KasRoudra" />
        <meta name="application-name" content="Happy-BirthDay-Template" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@kasroudra" />
        <meta name="twitter:creator" content="@kasroudra" />
        <meta name="twitter:title" content="Happy-BirthDay-Template" />
        <meta
          name="twitter:description"
          content="Wish your friend an awesome happy birthday!"
        />
        <meta name="twitter:image" content="/desc.jpg" />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <title>Happy Birthday</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-5">
        <div className="mt-5 mb-5">
          <h1>Happy Birthday Template</h1>
        </div>
        <form id="form" className="mt-3">
          <div className="fields" ref={ref}>
            {data &&
              data.map(([myKey, val]: [string, string]) => {
                if (myKey) return (
                  <Input myKey={myKey} val={val} key={myKey} />
                );
              })}
          </div>
        </form>
        <div className="card">
          <div className="card-body">
            <div className={styles.buttons}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleCopy}
              >
                Copy to Clipboard
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleShorten}
              >
                Shorten URL
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleGo}
              >
                Go to URL
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className={styles.icons}>
          <a
            href="https://github.com/KasRoudra"
            target="_blank"
            rel="noreferrer"
            className={styles.socLink}
          >
            <Image
              src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg"
              alt="github"
              className={styles.socIcon}
              width={25}
              height={25}
            />
          </a>
          <a
            href="mailto:kasroudrakrd@gmail.com"
            target="_blank"
            rel="noreferrer"
            className={styles.socLink}
          >
            <Image
              src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/gmail.svg"
              alt="email"
              className={styles.socIcon}
              width={25}
              height={25}
            />
          </a>
          <a
            href="https://facebook.com/KasRoudra"
            target="_blank"
            rel="noreferrer"
            className={styles.socLink}
          >
            <Image
              src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg"
              alt="facebook"
              className={styles.socIcon}
              width={25}
              height={25}
            />
          </a>
          <a href="https://m.me/KasRoudra" target="_blank" rel="noreferrer"
          className={styles.socLink}>
            <Image
              src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/messenger.svg"
              alt="messenger"
              className={styles.socIcon}
              width={25}
              height={25}
            />
          </a>
        </div>
        <div>
          <p className={`${styles.footerText} mb-3`}>
            Made with <span role="Image">❤️</span> by{" "}
            <a
              href="https://github.com/KasRoudra"
              target="_blank"
              rel="noreferrer"
            >
              KasRoudra
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
