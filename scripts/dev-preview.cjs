// Accept the preview supervisor's generic host/port options and forward Next.js options.
const {spawn}=require('node:child_process');
const preview=process.argv.includes('--strictPort') && process.env.SITES_MANAGED_LINUX_CONTAINER==='1';
const args=process.argv.slice(2).filter(a=>a!=='--strictPort').map(a=>a==='--host'?'--hostname':a);
if(!args.includes('--hostname'))args.push('--hostname','0.0.0.0');
const server=spawn(process.execPath,[require.resolve('next/dist/bin/next'),preview?'start':'dev',...args],{stdio:'inherit',env:process.env});
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>server.kill(signal));
server.on('exit',code=>process.exit(code||0));
