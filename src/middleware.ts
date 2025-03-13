import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthService";

type Role = keyof typeof roleBasedPrivateRoutes;

export const authRoutes = ["/login", "/register"]

const roleBasedPrivateRoutes = {
    user: [/^\/cart/, /^\/dashboard\/profile/, /^\/dashboard/, /^\/dashboard\/listing\/add-listing/, /^\/dashboard\/listing\/updating-listing/, /^\/dashboard\/purchase-history/, /^\/dashboard\/sales-history/],

    admin: [/^\/admin/],
};

export const middleware = async (request: NextRequest) => {

    const { pathname } = request.nextUrl
    const userInfo = await getCurrentUser();

    if (!userInfo) {
        if (authRoutes.includes(pathname)) {
            return NextResponse.next()
        } else {
            return NextResponse.redirect(
                // new URL(`http://localhost:3000/login?redirectPath=${pathname}, request.url`)
                new URL(`https://secondhand-client.vercel.app/login?redirectPath=${pathname}, request.url`)
                
            )
        }
    }
    if (userInfo?.role && roleBasedPrivateRoutes[userInfo?.role as Role]) {
        const routes = roleBasedPrivateRoutes[userInfo?.role as Role];
        if (routes.some((route) => pathname.match(route))) {
            return NextResponse.next();
        }

        return NextResponse.redirect(new URL("/", request.url));
    }
}

export const config = {
    matcher: [
        // "/:page",
        "/cart",
        "/dashboard/profile",
        "/dashboard/listing",
        "/dashboard/add-listing",
        "/dashboard/updating-listing",
        "/dashboard/purchase-history",
        "/dashboard/sales-history",
    ]
}