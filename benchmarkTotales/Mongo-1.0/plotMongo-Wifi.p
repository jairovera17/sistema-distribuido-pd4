# output as png image
set terminal png size 800


set output "resMongo-Wifi.png"

# graph title
set title "2000 peticiones, 50 peticiones concurrentes"

# nicer aspect ratio for image size
set size ratio 0.8

# y-axis grid
set grid y

# x-axis label
set xlabel "peticiones"

# y-axis label
set ylabel "tiempo de respuesta (ms)"

plot "result-Mongo-redPoli-1.93Mbps.tsv" using 8 smooth sbezier with lines title "Conexión Inalámbrica,MongoDB, 1.93Mbps"
