"use client";

import { Modal, Button } from "@heroui/react";
import { Clock, Calendar, Info } from "lucide-react";

interface ScheduleModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export const ScheduleModal = ({ isOpen, onOpenChange }: ScheduleModalProps) => {
  return (
    <Modal.Backdrop isOpen={isOpen} onOpenChange={onOpenChange} variant="blur">
      <Modal.Container>
        <Modal.Dialog className="sm:max-w-150 border-none shadow-overlay overflow-hidden bg-surface">
          <Modal.CloseTrigger className="top-4 right-4 cursor-pointer" />

          <Modal.Header className="flex flex-col items-center pt-10 pb-4 px-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-4 border border-accent-soft-hover">
              <Clock className="size-8 text-accent" />
            </div>
            <Modal.Heading className="text-2xl font-semibold text-foreground tracking-tight">
              Horario de Consulta
            </Modal.Heading>
          </Modal.Header>

          <Modal.Body className="py-8 px-8">
            <div className="space-y-6">
              {/* Main Schedule Block */}
              <div className="p-5 rounded-2xl flex items-start gap-4 transition-colors">
                <div className="p-2 rounded-lg bg-accent/5 shrink-0">
                  <Calendar className="size-5 text-accent" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-sm font-semibold text-muted uppercase tracking-wider">Días de apertura</p>
                  <p className="text-base font-medium text-foreground">Lunes, Martes y Viernes</p>
                </div>
              </div>

              {/* Hours Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl flex flex-col items-center text-center gap-2">
                  <span className="text-xs font-semibold text-muted uppercase tracking-wider">Mañanas</span>
                  <span className="text-lg font-semibold text-accent">09:30 – 14:00</span>
                </div>
                <div className="p-5 rounded-2xl flex flex-col items-center text-center gap-2">
                  <span className="text-xs font-semibold text-muted uppercase tracking-wider">Tardes</span>
                  <span className="text-lg font-semibold text-accent">16:00 – 19:00</span>
                </div>
              </div>

              {/* Notice */}
              <div className="flex items-center gap-3 px-2 text-muted italic">
                <Info className="size-4 shrink-0" />
                <p className="text-sm">
                  Es imprescindible solicitar <strong>cita previa</strong> para garantizar tu atención.
                </p>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer className="px-8 pb-8 pt-2">
            <Button
              className="w-full h-12 text-base font-medium transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              variant="primary"
              slot="close"
            >
              Entendido
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal.Container>
    </Modal.Backdrop>
  );
};
