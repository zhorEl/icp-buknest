import React, { useState } from 'react';
import { X, Upload, FileText, Camera, Award, CheckCircle, AlertCircle, Trash2 } from 'lucide-react';

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerifySuccess: () => void;
}

interface UploadedFile {
  name: string;
  size: number;
  type: string;
}

export default function VerificationModal({ isOpen, onClose, onVerifySuccess }: VerificationModalProps) {
  const [uploadedFiles, setUploadedFiles] = useState<{[key: string]: UploadedFile[]}>({
    governmentId: [],
    professionalLicense: [],
    certifications: [],
    selfieWithId: [],
    additionalDocs: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dragOver, setDragOver] = useState<string | null>(null);

  if (!isOpen) return null;

  const documentTypes = [
    {
      id: 'governmentId',
      title: 'Government ID',
      description: 'Driver\'s License, Passport, or National ID',
      icon: FileText,
      required: true,
      maxFiles: 2
    },
    {
      id: 'professionalLicense',
      title: 'Professional License',
      description: 'Your professional license or certification',
      icon: Award,
      required: true,
      maxFiles: 3
    },
    {
      id: 'selfieWithId',
      title: 'Selfie with ID',
      description: 'Photo of yourself holding your government ID',
      icon: Camera,
      required: true,
      maxFiles: 1
    },
    {
      id: 'certifications',
      title: 'Additional Certifications',
      description: 'Training certificates, continuing education',
      icon: Award,
      required: false,
      maxFiles: 5
    },
    {
      id: 'additionalDocs',
      title: 'Supporting Documents',
      description: 'Background checks, references, etc.',
      icon: FileText,
      required: false,
      maxFiles: 3
    }
  ];

  const handleFileUpload = (documentType: string, files: FileList) => {
    const newFiles: UploadedFile[] = [];
    const maxFiles = documentTypes.find(dt => dt.id === documentType)?.maxFiles || 1;
    const currentFiles = uploadedFiles[documentType] || [];
    
    for (let i = 0; i < Math.min(files.length, maxFiles - currentFiles.length); i++) {
      const file = files[i];
      if (file.size <= 10 * 1024 * 1024) { // 10MB limit
        newFiles.push({
          name: file.name,
          size: file.size,
          type: file.type
        });
      }
    }
    
    setUploadedFiles(prev => ({
      ...prev,
      [documentType]: [...(prev[documentType] || []), ...newFiles]
    }));
  };

  const handleDrop = (e: React.DragEvent, documentType: string) => {
    e.preventDefault();
    setDragOver(null);
    const files = e.dataTransfer.files;
    handleFileUpload(documentType, files);
  };

  const handleDragOver = (e: React.DragEvent, documentType: string) => {
    e.preventDefault();
    setDragOver(documentType);
  };

  const handleDragLeave = () => {
    setDragOver(null);
  };

  const removeFile = (documentType: string, index: number) => {
    setUploadedFiles(prev => ({
      ...prev,
      [documentType]: prev[documentType].filter((_, i) => i !== index)
    }));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const canSubmit = () => {
    const requiredTypes = documentTypes.filter(dt => dt.required);
    return requiredTypes.every(dt => uploadedFiles[dt.id] && uploadedFiles[dt.id].length > 0);
  };

  const handleSubmit = () => {
    if (!canSubmit()) {
      alert('Please upload all required documents');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission process
    setTimeout(() => {
      setIsSubmitting(false);
      onVerifySuccess();
      onClose();
      alert('Verification documents submitted successfully! We will review your documents within 2-3 business days.');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 font-handwritten">Professional Verification</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        
        <div className="p-8">
          <div className="mb-8 p-6 bg-gradient-to-r from-pink-50 to-green-50 rounded-2xl border border-pink-200">
            <div className="flex items-center mb-4">
              <CheckCircle className="h-6 w-6 text-[#CB748E] mr-3" />
              <h3 className="text-xl font-bold text-gray-800 font-handwritten">Verification Requirements</h3>
            </div>
            <p className="text-gray-700 mb-4 font-sans">
              To ensure the safety and quality of our platform, all professionals must submit verification documents. 
              This process typically takes 2-3 business days.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center text-sm text-gray-700 font-sans">
                <AlertCircle className="h-4 w-4 mr-2 text-yellow-600" />
                Maximum file size: 10MB per file
              </div>
              <div className="flex items-center text-sm text-gray-700 font-sans">
                <AlertCircle className="h-4 w-4 mr-2 text-yellow-600" />
                Accepted formats: JPG, PNG, PDF
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {documentTypes.map((docType) => {
              const Icon = docType.icon;
              const files = uploadedFiles[docType.id] || [];
              const isDragOver = dragOver === docType.id;
              
              return (
                <div key={docType.id} className="border border-gray-200 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Icon className="h-6 w-6 text-[#CB748E] mr-3" />
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-800 font-handwritten">
                        {docType.title}
                        {docType.required && <span className="text-red-500 ml-1">*</span>}
                      </h4>
                      <p className="text-sm text-gray-600 font-sans">{docType.description}</p>
                    </div>
                    <span className="text-xs text-gray-500 font-sans">
                      {files.length}/{docType.maxFiles} files
                    </span>
                  </div>
                  
                  {/* Upload Area */}
                  <div
                    className={`border-2 border-dashed rounded-xl p-6 text-center transition-all duration-300 ${
                      isDragOver
                        ? 'border-[#CB748E] bg-pink-50'
                        : files.length >= docType.maxFiles
                        ? 'border-gray-200 bg-gray-50'
                        : 'border-gray-300 hover:border-[#CB748E] hover:bg-pink-50'
                    }`}
                    onDrop={(e) => handleDrop(e, docType.id)}
                    onDragOver={(e) => handleDragOver(e, docType.id)}
                    onDragLeave={handleDragLeave}
                  >
                    {files.length >= docType.maxFiles ? (
                      <div className="text-gray-500 font-sans">
                        <CheckCircle className="h-8 w-8 mx-auto mb-2 text-green-600" />
                        <p>Maximum files uploaded</p>
                      </div>
                    ) : (
                      <>
                        <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                        <p className="text-gray-600 mb-2 font-sans">
                          Drag and drop files here, or{' '}
                          <label className="text-[#CB748E] hover:text-[#d698ab] cursor-pointer font-bold">
                            browse
                            <input
                              type="file"
                              multiple={docType.maxFiles > 1}
                              accept="image/*,.pdf"
                              onChange={(e) => e.target.files && handleFileUpload(docType.id, e.target.files)}
                              className="hidden"
                            />
                          </label>
                        </p>
                        <p className="text-xs text-gray-500 font-sans">
                          JPG, PNG, PDF up to 10MB
                        </p>
                      </>
                    )}
                  </div>
                  
                  {/* Uploaded Files */}
                  {files.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                          <div className="flex items-center">
                            <FileText className="h-4 w-4 text-gray-500 mr-3" />
                            <div>
                              <p className="text-sm font-semibold text-gray-800 font-sans">{file.name}</p>
                              <p className="text-xs text-gray-600 font-sans">{formatFileSize(file.size)}</p>
                            </div>
                          </div>
                          <button
                            onClick={() => removeFile(docType.id, index)}
                            className="p-1 hover:bg-red-100 rounded-full transition-colors"
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Submit Button */}
          <div className="flex space-x-4 mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={handleSubmit}
              disabled={!canSubmit() || isSubmitting}
              className={`flex-1 px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center font-handwritten ${
                canSubmit() && !isSubmitting
                  ? 'bg-gradient-to-r from-[#CB748E] to-[#698a60] text-white hover:from-pink-500 hover:to-green-600'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Submit for Verification
                </>
              )}
            </button>
            <button
              onClick={onClose}
              disabled={isSubmitting}
              className="px-6 py-4 border-2 border-gray-300 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 text-gray-700 flex items-center justify-center font-handwritten"
            >
              <X className="h-5 w-5 mr-2" />
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}