import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { INITIAL_ITEMS } from '@/lib/constants';

export const useItemsStore = create(
  persist(
    (set) => ({
      items: INITIAL_ITEMS,
      addItem: (newItemText) => {
        const newItem = {
          id: new Date().getTime(),
          name: newItemText,
          packed: false,
        };

        set((state) => ({ items: [...state.items, newItem] }));
      },
      deleteItem: (itemID) => {
        set((state) => {
          const newItems = state.items.filter((item) => item.id !== itemID);

          return {
            items: newItems,
          };
        });
      },
      toggleItem: (itemID) => {
        set((state) => {
          const newItems = state.items.map((item) => {
            if (item.id === itemID) {
              return {
                ...item,
                packed: !item.packed,
              };
            }

            return item;
          });

          return {
            items: newItems,
          };
        });
      },
      removeAllItems: () => {
        set(() => ({ items: [] }));
      },
      resetToInitial: () => {
        set(() => ({ items: INITIAL_ITEMS }));
      },
      markAllAsIncomplete: () => {
        set((state) => {
          const newItems = state.items.map((item) => ({
            ...item,
            packed: false,
          }));

          return {
            items: newItems,
          };
        });
      },
      markAllAsComplete: () => {
        set((state) => {
          const markedItems = state.items.map((item) => ({
            ...item,
            packed: true,
          }));

          return {
            items: markedItems,
          };
        });
      },
    }),
    {
      name: 'trekbag-items',
    },
  ),
);
