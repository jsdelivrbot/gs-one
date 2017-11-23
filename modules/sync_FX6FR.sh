#!/bin/bash

URL_ORIGIN_GET="http://.....com"
URL_TARGET_POST="http://.....com"
TMP_FILE="/tmp/sync_FX6FR_GET.json"

# curl $URL_ORIGIN_GET > $TMP_FILE
wget -O $TMP_FILE $URL_ORIGIN_GET
echo -e "\e[32m"
echo "GET from $URL_ORIGIN_GET:"
echo -e "\e[39m"
cat $TMP_FILE
echo "--------------------------------------------------------------------------------"
echo -e "\e[32m"
echo "POST to $URL_TARGET_POST"
echo -e "\e[39m"
# curl -H "Content-Type: application/json" -X POST -d @$TMP_FILE $URL_TARGET_POST
wget --header "Content-Type: application/json" --post-file $TMP_FILE  -O /tmp/POST.log $URL_TARGET_POST
cat /tmp/POST.log
echo ""
