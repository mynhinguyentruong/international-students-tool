'use client';

import { Card, Title, BarChart, Subtitle, LineChart } from "@tremor/react";
import { Suspense } from "react";
import Loading from "@/app/hello/loading";

const chartdata = [
    {
        name: "Amphibians",
        "Number of threatened species": 2488,
    },
    {
        name: "Birds",
        "Number of threatened species": 1445,
    },
    {
        name: "Crustaceans",
        "Number of threatened species": 743,
    },
];

const data = [
    {
        year: 1951,
        "Population growth rate": 1.74,
        "Population decreased": 1.12
    },
    {
        year: 1952,
        "Population growth rate": 1.93,
        "Population decreased": 1.7
    },
    {
        year: 1953,
        "Population growth rate": 1.9,
        "Population decreased": 3
    },
    {
        year: 1954,
        "Population growth rate": 1.98,
        "Population decreased": 1.7
    },
    {
        year: 1955,
        "Population growth rate": 2,
        "Population decreased": 3
    },
];

const dataFormatter = (number: number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
};

const percentageDataFormatter = (number: number) => {
    return `${Intl.NumberFormat("us").format(number).toString()}%`;
}

export function Component() {
    return (
        <Card>
            <Title>Population growth rate (1951 to 2021)</Title>
            <Suspense fallback={<h1 className="text-9xl">Loading...</h1>}>
            <LineChart
                className="mt-6"
                data={data}
                index="year"
                categories={["Population growth rate","Population decreased"]}
                colors={["blue", "red"]}
                valueFormatter={percentageDataFormatter}
                yAxisWidth={40}
            />
            </Suspense>
        </Card>
    )
}

export default function Chart() {

    // const [data, setData] = useState(chartdata)
    return (
        <>

        <Card>
            <Title>Number of species threatened with extinction (2021)</Title>
            <Subtitle>
                The IUCN Red List has assessed only a small share of the total known
                species in the world.
            </Subtitle>
            <BarChart
                className="mt-6"
                data={chartdata}
                index="name"
                categories={["Number of threatened species"]}
                colors={["blue"]}
                valueFormatter={dataFormatter}
                yAxisWidth={48}
            />
        </Card>
        </>
    );
}
