import Chart from "@/app/hello/chart";
import { Suspense } from "react";
import Loading from "@/app/hello/loading";
import { Component } from "@/app/hello/chart";

export default function ChartPage() {
    return (
        <main>
            <Suspense fallback={<Loading/>}>
                <Component />
            </Suspense>
            <Chart />

        </main>
    )
}
