import { create } from 'zustand';
import { useUserStore } from './userStorage';
export const useChatStore = create((set) => ({
    chatId: null,
    user: null,
    isCurrentUserBlocked: false,
    isRecieverBlocked: false,
    changeChat: (chatId,user) => {
        const currentUser = useUserStore.getState().currentUser;
        if (!user) {
            return set({
                chatId: null,
                user: null,
                isCurrentUserBlocked: false,
                isRecieverBlocked: false,
            });
        }
        if(user.blocked.includes(currentUser.id)) {
            return set({
                chatId,
                user: null,
                isCurrentUserBlocked: true,
                isRecieverBlocked: false,
            });
        }
        else if (currentUser.blocked.includes(user.id)) { 
            return set({
                chatId,
                user: user,
                isCurrentUserBlocked: false,
                isRecieverBlocked: true,
            });
        } else {
            return set({
                chatId,
                user,
                isCurrentUserBlocked: false,
                isRecieverBlocked: false,
            });
        }
    },
    changeBlock: () => {
        set((state) => ({ ...state,isRecieverBlocked:  !state.isRecieverBlocked}));
    },
    resetChat: () => {
        set({
          chatId: null,
          user: null,
          isCurrentUserBlocked: false,
          isReceiverBlocked: false,
        });
      },
}));