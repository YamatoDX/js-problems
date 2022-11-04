// https://stackoverflow.com/questions/74310945/inserting-last-data-object-into-first-table-row-html/74311053#74311053

const data = [
    {
        address: "101 Main Street",
        date_created: "2022/10/27",
        price: "£200,000"
    },
    {
        address: "101 Main Street",
        date_created: "2022/10/20",
        price: "300,000"
    },
    { address: "101 Main Street", date_created: "2022/10/1", price: "300,000" },
    { address: "101 Main Street", date_created: "2022/10/2", price: "300,000" },
    {
        address: "101 Main Street",
        date_created: "2022/11/20",
        price: "300,000"
    },
    { address: "101 Main Street", date_created: "2022/12/20", price: "300,000" }
];

const result = data.sort((prev, current) => {
    const prevDate = prev["date_created"].replace("/", "-").replace("/", "-");
    const currentDate = current["date_created"]
        .replace(/\//i, "-")
        .replace(/\//i, "-");
    return new Date(currentDate) - new Date(prevDate);
});

console.log("result", result);

function createTable({ data, propertyId }) {
    const table = createElement({
        tag: "table",
        id: `p-${propertyId}`,
        border: "1"
    });

    const tableHeader = createElement({
        tag: "caption",
        innerText: "Table title"
    });

    const tableBody = createElement({
        tag: "tbody"
    });

    data.sort((prev, current) => {
        const prevDate = prev["date_created"]
            .replace("/", "-")
            .replace("/", "-");
        const currentDate = current["date_created"]
            .replace(/\//i, "-")
            .replace(/\//i, "-");
        return new Date(currentDate) - new Date(prevDate);
    }).forEach(item => {
        const row = createElement({
            tag: "tr"
        });

        const date = createElement({
            tag: "td",
            innerHTML: item.date_created
        });

        const price = createElement({
            tag: "td",
            innerHTML: item.price
        });

        row.append(date, price);
        tableBody.append(row);
    });

    table.append(tableHeader, tableBody);
    return table;
}
