import SkeletonCard from "@/ui/skeleton-card";

export default function Loading() {

    console.log("I loaded")
    return (
        <SkeletonCard isLoading={true} />
    )
}
