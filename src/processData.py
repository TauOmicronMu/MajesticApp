from collections import Counter
import json

def process_data():
    with open("majestic_10000.json") as f:
        string_data =  f.read()
    ungrouped_data = json.loads(string_data)
    tld_data = [x["TLD"] for x in ungrouped_data]
    counted_data = Counter(tld_data)
    print counted_data
