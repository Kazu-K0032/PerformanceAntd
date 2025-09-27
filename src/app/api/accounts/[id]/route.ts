import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const account = await prisma.account.findFirst({
      where: {
        id: params.id,
        deletedAt: null,
      },
    });

    if (!account) {
      return NextResponse.json(
        {
          success: false,
          error: "アカウントが見つかりません",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      account,
    });
  } catch (error) {
    console.error("アカウント取得エラー:", error);
    return NextResponse.json(
      {
        success: false,
        error: "アカウントの取得に失敗しました",
      },
      { status: 500 }
    );
  }
}
