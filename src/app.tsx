import {useEffect, useState} from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from './assets/vite.svg'

export function App() {
  const [count, setCount] = useState(0)
  const [info, setInfo] = useState(null);

  const text2Binary = (s: string) => {
    return s.split('').map(function (c: string) {
      return c.charCodeAt(0).toString(2);
    }).join(' ');
  }

  useEffect(() => {
    // @ts-ignore
    chrome.sockets.tcp.create({}, function (socketInfo: any) {
      // @ts-ignore
      chrome.sockets.tcp.connect(
        socketInfo.socketId,
        "192.168.1.25",
        9999,
        () => {
          // @ts-ignore
          chrome.sockets.tcp.send(socketInfo.socketId, text2Binary("LLLLLLLL"), (res: any) => {
          });
          // @ts-ignore
          chrome.sockets.tcp.onReceive.addListener((info: any) => {
            setInfo(info);
          });
        }
      )
    });
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
        <p>
          Socket Info: {JSON.stringify(info)}
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}
