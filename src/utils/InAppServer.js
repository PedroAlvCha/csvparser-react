import Server from 'socket.io';

export function startInAppServer(store){
  const io = new Server().attach(9001);

  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );

  //this connection is missing any kind of security. it MUST be implemented.
  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS());
    socket.on('action', store.dispatch.bind(store));
  });
}
