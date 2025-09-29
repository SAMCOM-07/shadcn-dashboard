'use client'

import { useState } from "react";
import { Card } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { ScrollArea } from "./ui/scroll-area"
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

const TodoList = () => {

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1 className="font-medium text-lg mb-4">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
      {/* list */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto ">
        <div className="space-y-3">
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, numquam.</label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item2" checked />
              <label htmlFor="item2" className="text-sm text-muted-foreground font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, numquam.</label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item3" checked />
              <label htmlFor="item3" className="text-sm text-muted-foreground font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, numquam.</label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item4" />
              <label htmlFor="item4" className="text-sm text-muted-foreground font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, numquam.</label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item5" />
              <label htmlFor="item5" className="text-sm text-muted-foreground font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, numquam.</label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item6" />
              <label htmlFor="item6" className="text-sm text-muted-foreground font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, numquam.</label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item7" />
              <label htmlFor="item7" className="text-sm text-muted-foreground font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, numquam.</label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item8" />
              <label htmlFor="item8" className="text-sm text-muted-foreground font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, numquam.</label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item9" />
              <label htmlFor="item9" className="text-sm text-muted-foreground font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, numquam.</label>
            </div>
          </Card>
          {/* list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item10" />
              <label htmlFor="item10" className="text-sm text-muted-foreground font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, numquam.</label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  )
}

export default TodoList
