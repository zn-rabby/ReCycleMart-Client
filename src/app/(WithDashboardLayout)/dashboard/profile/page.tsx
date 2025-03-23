/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { getMe, updateProfile } from "@/services/Transactions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { User, ShieldCheck, CheckCircle, Phone, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const ProfilePage = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    // password: "",
    // role: "",
    // status: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await getMe();
        setUser(data?.user);
        setFormData({
          name: data?.user?.name || "",
          phoneNumber: data?.user?.phoneNumber || "",
          email: data?.user?.email || "",
          // password: "",
          // role: data?.user?.role || "",
          // status: data?.user?.status || "",
        });
      } catch (error) {
        console.error("Error fetching user:", error);
        toast.error("Failed to fetch user data.");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await updateProfile(user?._id, formData);
      console.log("res", res);

      if (res.success) {
        toast.success(res.message);
        // Refresh user data after successful update
        const { data } = await getMe();
        setUser(data?.user);
        setFormData({
          name: data?.user?.name || "",
          phoneNumber: data?.user?.phoneNumber || "",
          email: data?.user?.email || "",
          // password: "",
          // role: data?.user?.role || "",
          // status: data?.user?.status || "",
        });
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.error(err);
      toast.error("An error occurred while updating the profile.");
    } finally {
      setIsModalOpen(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Card className="w-[400px] p-6">
          <CardHeader>
            <CardTitle>Loading Profile...</CardTitle>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-full mb-2" />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Card className="w-[450px] p-8 shadow-xl rounded-lg">
        <CardHeader className="text-center">
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-[#FF5E01]" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold mt-4 text-[#FF5E01]">
            {user?.name}
          </CardTitle>
          <p className="text-sm text-muted-foreground">{user?.email}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <ShieldCheck className="w-6 h-6  text-[#FF5E01] " />
            <div>
              <p className="text-sm text-muted-foreground">Role</p>
              <p className="text-lg font-medium capitalize">{user?.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <CheckCircle className="w-6 h-6 text-[#FF5E01]" />
            <div>
              <p className="text-sm text-muted-foreground">Status</p>
              <p className="text-lg font-medium">{user?.status}</p>
            </div>
          </div>
          {user?.phoneNumber && (
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Phone className="w-6 h-6 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Phone Number</p>
                <p className="text-lg font-medium">{user?.phoneNumber}</p>
              </div>
            </div>
          )}

          {/* Dialog (Modal) for Updating Profile */}
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button className="w-full mt-4 bg-[#FF5E01] hover:bg-[#D94F01] text-white">
                <Edit className="w-4 h-4 mr-2" />
                Update Profile
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Update Profile</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                  />
                </div>
                {/* <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" name="password" type="password" value={formData.password} onChange={handleInputChange} placeholder="Enter a new password" />
                </div> */}
                {/* <div>
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" name="role" value={formData.role} onChange={handleInputChange} placeholder="Enter your role" />
                </div> */}
                {/* <div>
                  <Label htmlFor="status">Status</Label>
                  <Input id="status" name="status" value={formData.status} onChange={handleInputChange} placeholder="Enter your status" />
                </div> */}
                <div className="flex justify-end gap-2">
                  <Button
                    className="bg-[#FF5E01] hover:bg-[#D94F01] text-white"
                    type="button"
                    variant="outline"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="bg-[#FF5E01] hover:bg-[#D94F01] text-white"
                    type="submit"
                  >
                    Save Changes
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
