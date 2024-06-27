import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { LatestInvoicesSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";


export default function page() {
  return (
    <div>
      <h1 className="">Our customers</h1>
     <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
    </div>
          // to make a new component where I map over the customers
  )
}
