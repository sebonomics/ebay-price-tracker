export default async function handler(req, res) {
    const { query } = req;

    const url = `https://api.ebay.com/buy/browse/v1/item_summary/search?q=${query.q}&limit=5`;
    const headers = {
        "Authorization": `Bearer ${process.env.EBAY_ACCESS_TOKEN}`,
        "Content-Type": "application/json"
    };

    try {
        const response = await fetch(url, { headers });
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch eBay data" });
    }
}
