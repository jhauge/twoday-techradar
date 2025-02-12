# Read the value of the SANITY_STUDIO_PROJECT_ID key from .env.local
$sanityProjectId = Get-Content -Path ..\.env.local | ForEach-Object {
    $key, $value = $_ -split '=', 2
    if ($key -eq 'SANITY_STUDIO_PROJECT_ID') {
        $value
    }
}
$apiUrl = "https://$sanityProjectId.api.sanity.io/v2022-03-07/data/query/production?&perspective=published"

# Grab the content of groq-qry.txt file as a single line and url-encode it
$groq = (Get-Content -Path .\groq-qry.txt -Raw).Replace("`r`n", " ").Replace("`n", " ").Replace("    ", " ").Trim()

$encodedGroq = [System.Net.WebUtility]::UrlEncode($groq)
$apiUrl += "&query=$encodedGroq"

Write-Host "API URL: $apiUrl"

$trJson = Invoke-WebRequest "https://tnhwf0jo.api.sanity.io/v2022-03-07/data/query/production?query={$encodedGroq}&perspective=published"
$trJsonResult = ($trJson.Content | ConvertFrom-Json).result
$trJsonResult | Select-Object name, ring, quadrant, isNew, status, description | Export-Csv -Path ..\data\tech-radar.csv -UseQuotes Always