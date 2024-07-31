npx quartz sync
npx quartz build --output /home/micha/NAS/Web/infothek --baseDir 172.16.1.4/infothek/
cp .htaccess /home/micha/NAS/Web/infothek/
mkdir -p /home/micha/NAS/Web/static
cp quartz/static/quartzLogo /home/micha/NAS/Web/static

