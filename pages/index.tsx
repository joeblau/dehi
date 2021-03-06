import Head from "next/head";
import Web3 from "web3";
import Avatar from "boring-avatars";

interface Message {
  content: string;
  user: string;
  isHacker: boolean;
  date: string;
}

const footerLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com/joeblau",
    icon: function Twitter(props: any) {
      return (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      );
    },
  },
  {
    name: "GitHub",
    href: "https://github.com/joeblau/dehi",
    icon: function GitHub(props: any) {
      return (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      );
    },
  },
];

const TITLE = "DeHi";
const DOMAIN = "https://dehi.app";
const CREATOR = "@joeblau";
const SOCIAL_IMAGE = `${DOMAIN}/images/social.png`;

export default function Home(props: any) {
  const description = String(props.description);
  const timelineMessages: Message[] = props.timelineMessages;

  const shortAddress = (address: string) => (
    <>
      {address.substring(0, 6)}...
      {address.substring(address.length - 4)}
    </>
  );
  return (
    <div>
      <Head>
        <meta name="application-name" content={TITLE} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta name="apple-mobile-web-app-title" content={TITLE} />
        <meta name="description" content={description} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Twitter Metadata */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={DOMAIN} />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={SOCIAL_IMAGE} />
        <meta name="twitter:creator" content={CREATOR} />

        {/* Open Graph Metadata */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={TITLE} />
        <meta property="og:url" content={DOMAIN} />
        <meta property="og:image" content={SOCIAL_IMAGE} />

        {/* Favicons */}
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-3xl mx-auto">
          <main>
            <div className="max-w-7xl mx-auto py-8 px-2 sm:py-12 sm:px-3 lg:px-4">
              <div className="text-center">
                <h1 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                  DeHi
                </h1>
                <p className="text-base font-semibold text-gray-400 tracking-wide uppercase">
                  {description}
                </p>
              </div>
            </div>

            <div className="flow-root">
              <ul className="divide-y divide-gray-200">
                {timelineMessages.map((timelineMessage, index) => (
                  <li key={index} className="py-4">
                    <div className="flex space-x-3">
                      <Avatar
                        size={40}
                        name={timelineMessage.user}
                        variant="beam"
                        colors={[
                          "#001449",
                          "#012677",
                          "#005BC5",
                          "#00B4FC",
                          "#17F9FF",
                        ]}
                      />

                      <div className="flex-1 space-y-2 overflow-ellipsis overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between">
                          <div className="flex space-x-6">
                            <h3 className="text-sm font-medium font-mono text-gray-500">
                              {" "}
                              {shortAddress(timelineMessage.user)}
                            </h3>
                            {timelineMessage.isHacker ? (
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                Hacker
                              </span>
                            ) : null}
                          </div>
                          <p className="text-xs font-mono text-gray-400">
                            {timelineMessage.date}
                          </p>
                        </div>
                        <p className="text-sm text-gray-700">
                          {timelineMessage.content}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </main>
          <footer>
            <div className="grid justify-items-stretch max-w-7xl mx-auto py-8 px-2 sm:py-12 sm:px-3 lg:px-4">
              <div className="justify-self-center">
                <div className="flex space-x-6">
                  {footerLinks.map((footerLink) => (
                    <a
                      key={footerLink.name}
                      href={footerLink.href}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">{footerLink.name}</span>
                      <footerLink.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  var web3 = new Web3(String(process.env.MAINNET_NODE));

  const currentBlock = await web3.eth.getBlockNumber();
  const startBlock = Number(process.env.START_BLOCK);
  const endBlock = Number(process.env.END_BLOCK) || currentBlock;
  const hackerAddress = String(process.env.HACKER_ADDRESS);

  var timelineMessages: Message[] = [];

  // loop through every block from startBlock to the latest block
  for (var i = startBlock; i <= endBlock; i++) {
    // get the block
    var block = await web3.eth.getBlock(i, true);
    // get the transactions in the block
    var transactions = block.transactions;
    // loop through the transactions
    for (var j = 0; j < transactions.length; j++) {
      const transaction = transactions[j];
      // if the message is to the hacker
      var date = new Date(Number(block.timestamp) * 1000);

      if (
        transaction.to === hackerAddress &&
        transaction.from !== hackerAddress
      ) {
        // try to decode input
        var message = "";
        try {
          message = web3.utils.toUtf8(transaction.input);
        } catch (e) {
          message = web3.utils.toAscii(transaction.input);
        }
        // if message string is empty, skip
        if (message.length === 0) {
          continue;
          ``;
        }
        timelineMessages.push({
          content: message,
          user: transaction.from,
          isHacker: false,
          date: date.toLocaleString(),
        });
      }
      // message from the hacker
      if (transaction.from === hackerAddress) {
        var message = "";
        try {
          message = web3.utils.toUtf8(transaction.input);
        } catch (e) {
          message = web3.utils.toAscii(transaction.input);
        }

        if (message.length === 0) {
          continue;
        }
        timelineMessages.push({
          content: message,
          user: transaction.from,
          isHacker: true,
          date: date.toLocaleString(),
        });
      }
    }
  }

  return {
    props: {
      description: process.env.DESCRIPTION,
      timelineMessages: timelineMessages,
    },
    revalidate: 2 * 60 * 60,
  };
}
