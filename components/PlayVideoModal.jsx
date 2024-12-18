import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
  
  
  
  
  export default function PlayVideoModal({
    changeState,
    data,
    state,
    
   
  }) {
    console.log(data);
    
    return (
      <Dialog open={state} onOpenChange={() => changeState(!state)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{data.title}</DialogTitle>
            <DialogDescription className="line-clamp-3">
              {data.overview}
            </DialogDescription>
            <div className="flex gap-x-2 items-center">
              <p>{data.release}</p>
              <p className="border py-o.5 px-1 border-gray-200 rounded">{data.age}+</p>
              <p>{data.duration}h</p>
            </div>
          </DialogHeader>
          <iframe src={data.youtubeString} height={250} className="w-full"></iframe>
        </DialogContent>
      </Dialog>
    );
  }
  