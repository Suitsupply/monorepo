export interface CloudinaryImage {
  url: string;
  tags: string[] | null;
  type: 'upload';
  bytes: number;
  width: number;
  format: string;
  height: number;
  version: number;
  duration?: number | null;
  metadata: string[];
  public_id: string;
  created_at: string;
  secure_url: string;
  resource_type: 'image';
  original_url: string;
  original_secure_url: string;
  raw_transformation: string;
}
