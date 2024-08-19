"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastViewport,
} from "@/components/molecules/toast";
import { useToast } from "@/lib/hooks/use-toast";
import { Notification } from "./notification";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        state,
        ...props
      }) {
        return (
          <Toast key={id} {...props}>
            <Notification state={state} title={title}>
              <div className="flex items-center gap-2 justify-between">
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
                {action}
              </div>
              <ToastClose />
            </Notification>
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
