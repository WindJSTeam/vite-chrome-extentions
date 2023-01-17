// @ts-ignore
chrome.app.runtime.onLaunched.addListener(() => {
  // @ts-ignore
  chrome.app.window.create('index.html', {
    id: "socket_window",
    singleton: true
  }, (win: any) => {
    win.onClosed.addListener(function () {
      // @ts-ignore
      chrome.sockets.tcp.SocketInfo((connections: any) => {
        connections.forEach((c: any) => {
          // @ts-ignore
          chrome.sockets.tcp.close(c.socketId, () => {

          });
        });
      });
    });
  });
});
