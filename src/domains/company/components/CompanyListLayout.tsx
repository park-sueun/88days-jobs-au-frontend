// CompanyListLayout.tsx

export default function CompanyListLayout({
  filters,
  table,
}: any) {
  return (
    <div className="flex justify-center w-full">
      
      {/* 전체 컨텐츠 width 제한 */}
      <div className="w-full max-w-7xl flex gap-6 py-6">
        
        {/* Filters (고정 width) */}
        <div className="w-[260px] shrink-0">
          {filters}
        </div>

        {/* Table 영역 */}
        <div className="flex-1 min-w-0">
          <div className="bg-white rounded-xl shadow-sm w-full">
            {table}
          </div>
        </div>

      </div>
    </div>
  );
}