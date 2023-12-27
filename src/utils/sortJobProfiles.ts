import { JobProfile } from "@/types/types";

type Sort = 'recent'|'lowToHigh'|'highToLow'

export default function sortJobProfiles(jobProfiles: JobProfile[], sorting: Sort): JobProfile[] {
    switch (sorting) {
      case 'recent':
        return [...jobProfiles].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      case 'lowToHigh':
        return [...jobProfiles].sort((a, b) => a.salary - b.salary);
      case 'highToLow':
        return [...jobProfiles].sort((a, b) => b.salary - a.salary);
      default:
        // Default to recent if an invalid sorting string is provided
        return [...jobProfiles].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    }
  }