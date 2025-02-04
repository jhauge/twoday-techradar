$trJson = Invoke-WebRequest "https://tnhwf0jo.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27TechType%27%5D+%7C+order%28quadrant%29+%0A%7B%0A++name%2C+%0A++quadrant%2C+%0A++ring%2C+%0A++isNew%2C%0A++%22description%22%3A+array%3A%3Ajoin%28%5B%22%3Cp%3E%3Cstrong%3E%3Ca+href%3D%27%22%2Ccoalesce%28url%2C+%22%23%22%29%2C%22%27%3E%22%2Cname%2C%22%3C%2Fa%3E%3C%2Fstrong%3E%22%2Cdescription%2C%22%3C%2Fp%3E%22%5D%2C+%22%22%29%0A%7D&perspective=published"
echo $trJson
$trJsonResult = ($trJson.Content | ConvertFrom-Json).result
echo $trJsonResult
$trJsonResult | Export-Csv -Path ..\data\tech-radar.csv -UseQuotes AsNeeded