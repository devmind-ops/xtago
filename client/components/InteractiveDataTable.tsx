import { useState } from "react";
import { ActionMenu } from "./ActionMenu";

interface TableEntry {
  id: number;
  costType: string;
  cost: string;
}

interface InteractiveDataTableProps {
  entries: TableEntry[];
  onEdit: (entry: TableEntry, pos?: { x: number; y: number }) => void;
  onView: (entry: TableEntry, pos?: { x: number; y: number }) => void;
  onDelete: (entry: TableEntry, pos?: { x: number; y: number }) => void;
}

function FigmaCheckbox({ checked, onChange, onClick }: { checked: boolean; onChange: () => void; onClick?: (e: React.MouseEvent) => void; }) {
  return (
    <label className="relative inline-flex items-center justify-center w-5 h-5" onClick={onClick}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />
      <span className="block w-5 h-5 rounded-md border border-[#697B7B] bg-transparent" />
      <span className="pointer-events-none absolute w-2.5 h-2.5 rounded-[2px] bg-[#FE8A00] opacity-0 peer-checked:opacity-100" />
    </label>
  );
}

export function InteractiveDataTable({ entries, onEdit, onView, onDelete }: InteractiveDataTableProps) {
  const [selectedEntries, setSelectedEntries] = useState<number[]>([]);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
  const [activeActionMenu, setActiveActionMenu] = useState<{ entryId: number; position: { x: number; y: number } } | null>(null);

  // Sort entries
  const sortedEntries = [...entries].sort((a, b) => {
    if (!sortConfig) return 0;
    
    const aValue = a[sortConfig.key as keyof TableEntry];
    const bValue = b[sortConfig.key as keyof TableEntry];
    
    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleSelectEntry = (entryId: number) => {
    setSelectedEntries(prev => 
      prev.includes(entryId) 
        ? prev.filter(id => id !== entryId)
        : [...prev, entryId]
    );
  };

  const handleSelectAll = () => {
    if (selectedEntries.length === entries.length) {
      setSelectedEntries([]);
    } else {
      setSelectedEntries(entries.map(entry => entry.id));
    }
  };

  const handleActionClick = (event: React.MouseEvent, entryId: number) => {
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();
    const MENU_WIDTH = 90;
    const PADDING = 8;
    const x = Math.min(
      Math.max(PADDING, rect.left),
      window.innerWidth - MENU_WIDTH - PADDING
    );
    const y = Math.min(rect.bottom + 8, window.innerHeight - 48);
    setActiveActionMenu({
      entryId,
      position: { x, y }
    });
  };

  const getEntry = (entryId: number) => entries.find(e => e.id === entryId)!;

  return (
    <div className="px-4 mb-6">
      <div className="bg-[#1C242E] rounded-3xl overflow-hidden border border-[#22353E]">
        {/* Table Header */}
        <div className="flex items-center bg-[#1C242E]">
          <div className="flex flex-col items-center justify-center w-[52px] p-4 border-b border-[#22353E]">
            <FigmaCheckbox
              checked={selectedEntries.length === entries.length && entries.length > 0}
              onChange={handleSelectAll}
            />
          </div>
          
          <div className="flex items-center px-4 py-4 w-[169px] border-b border-[#22353E] gap-3">
            <button
              onClick={() => handleSort('costType')}
              className="flex items-center gap-3 text-[#C4C4C4] text-base font-normal hover:text-[#F6F6F6]"
            >
              Cost Type
              <div className="flex flex-col gap-0.5">
                <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.20711 5C0.761654 5 0.538571 4.46143 0.853553 4.14645L4.64645 0.353553C4.84171 0.158291 5.15829 0.158291 5.35355 0.353553L9.14645 4.14645C9.46143 4.46143 9.23835 5 8.79289 5H1.20711Z" fill="#697B7B"/>
                </svg>
                <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.79289 -1.05529e-07C9.23835 -6.65859e-08 9.46143 0.538571 9.14645 0.853553L5.35355 4.64645C5.15829 4.84171 4.84171 4.84171 4.64645 4.64645L0.853553 0.853552C0.538571 0.53857 0.761655 -8.07642e-07 1.20711 -7.68699e-07L8.79289 -1.05529e-07Z" fill="#697B7B"/>
                </svg>
              </div>
            </button>
          </div>
          
          <div className="flex items-center px-4 py-4 w-[86px] border-b border-[#22353E] gap-3">
            <button
              onClick={() => handleSort('cost')}
              className="flex items-center gap-3 text-[#C4C4C4] text-base font-normal hover:text-[#F6F6F6]"
            >
              Cost
              <div className="flex flex-col gap-0.5">
                <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.20711 5C0.761654 5 0.538571 4.46143 0.853553 4.14645L4.64645 0.353553C4.84171 0.158291 5.15829 0.158291 5.35355 0.353553L9.14645 4.14645C9.46143 4.46143 9.23835 5 8.79289 5H1.20711Z" fill="#697B7B"/>
                </svg>
                <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.79289 -1.05529e-07C9.23835 -6.65859e-08 9.46143 0.538571 9.14645 0.853553L5.35355 4.64645C5.15829 4.84171 4.84171 4.84171 4.64645 4.64645L0.853553 0.853552C0.538571 0.53857 0.761655 -8.07642e-07 1.20711 -7.68699e-07L8.79289 -1.05529e-07Z" fill="#697B7B"/>
                </svg>
              </div>
            </button>
          </div>
          
          <div className="flex items-center px-4 py-4 w-[89px] border-b border-[#22353E]">
            <span className="text-[#C4C4C4] text-base font-normal">Action</span>
          </div>
        </div>

        {/* Table Rows */}
        {sortedEntries.map((entry, index) => (
          <div
            key={entry.id}
            className={`flex items-center cursor-pointer hover:bg-[#22353E] ${index % 2 === 1 ? 'bg-[#1C242E]' : ''}`}
            onClick={() => handleSelectEntry(entry.id)}
          >
            <div className="flex items-center justify-center w-[52px] p-4 border-r border-b border-l border-[#22353E]">
              <FigmaCheckbox
                checked={selectedEntries.includes(entry.id)}
                onChange={() => handleSelectEntry(entry.id)}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            
            <div className="flex items-center px-4 py-4 w-[169px] border-b border-[#22353E]">
              <span className="text-[#F6F6F6] text-base font-normal">{entry.costType}</span>
            </div>
            
            <div className="flex items-center px-4 py-4 w-[86px] border-b border-[#22353E]">
              <span className="text-[#F6F6F6] text-base font-normal">{entry.cost}</span>
            </div>
            
            <div className="flex items-center justify-center px-4 py-4 w-[89px] border-r border-b border-l border-[#22353E]">
              <button
                onClick={(e) => handleActionClick(e, entry.id)}
                className="text-[#697B7B] hover:text-[#F6F6F6]"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9C3 9.19891 3.07902 9.38968 3.21967 9.53033C3.36032 9.67098 3.55109 9.75 3.75 9.75C3.94891 9.75 4.13968 9.67098 4.28033 9.53033C4.42098 9.38968 4.5 9.19891 4.5 9C4.5 8.80109 4.42098 8.61032 4.28033 8.46967C4.13968 8.32902 3.94891 8.25 3.75 8.25C3.55109 8.25 3.36032 8.32902 3.21967 8.46967C3.07902 8.61032 3 8.80109 3 9ZM8.25 9C8.25 9.19891 8.32902 9.38968 8.46967 9.53033C8.61032 9.67098 8.80109 9.75 9 9.75C9.19891 9.75 9.38968 9.67098 9.53033 9.53033C9.67098 9.38968 9.75 9.19891 9.75 9C9.75 8.80109 9.67098 8.61032 9.53033 8.46967C9.38968 8.32902 9.19891 8.25 9 8.25C8.80109 8.25 8.61032 8.32902 8.46967 8.46967C8.32902 8.61032 8.25 8.80109 8.25 9ZM13.5 9C13.5 9.19891 13.579 9.38968 13.7197 9.53033C13.8603 9.67098 14.0511 9.75 14.25 9.75C14.4489 9.75 14.6397 9.67098 14.7803 9.53033C14.921 9.38968 15 9.19891 15 9C15 8.80109 14.921 8.61032 14.7803 8.46967C14.6397 8.32902 14.4489 8.25 14.25 8.25C14.0511 8.25 13.8603 8.32902 13.7197 8.46967C13.579 8.61032 13.5 8.80109 13.5 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Action Menu */}
      {activeActionMenu && (
        <ActionMenu
          isOpen={true}
          onClose={() => setActiveActionMenu(null)}
          onEdit={(pos) => onEdit(getEntry(activeActionMenu.entryId), pos)}
          onView={(pos) => onView(getEntry(activeActionMenu.entryId), pos)}
          onDelete={(pos) => onDelete(getEntry(activeActionMenu.entryId), pos)}
          position={activeActionMenu.position}
        />
      )}
    </div>
  );
}
