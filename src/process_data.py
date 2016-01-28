from collections import Counter
import json


with open("majestic_10000.json") as f:
    data = f.read()
    json_data = json.loads(data)
    tld_data = [x["TLD"] for x in json_data]
    counter = Counter(tld_data)
    c = dict(counter.most_common(10))
    
    domains_in_top_10 = sum(c.values())

    other_slice_percent = round((100*(10000 - domains_in_top_10)/domains_in_top_10), 2)
    percent_data = {}
    for tld in c:
        percent_data[tld] = c[tld]/100
    percent_data["Others"] = other_slice_percent 
    json_percent_data = json.dumps(percent_data)
    with open("percent_data.json", "w") as f:
        f.write(json_percent_data)
    data_points_list = []
    for key, value in percent_data.items():
        data_points_list.append({ "y": value, "legendText": key, "label": key}) 
    with open("data_points.json", "w") as f:
        json.dump(data_points_list, f)
        
        
    
