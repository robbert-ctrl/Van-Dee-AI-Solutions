import React, { useState } from 'react';
import { X, CheckCircle, Loader } from 'lucide-react';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  source: string;
}

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ isOpen, onClose, source }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    role: '',
    companyName: '',
    companyAddress: '',
    companyPostalCode: '',
    companyIndustry: '',
    customIndustry: '',
    contactEmail: '',
    contactPhone: '',
    website: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [showCustomIndustry, setShowCustomIndustry] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    // Show custom industry input if "Anders" is selected
    if (name === 'companyIndustry') {
      setShowCustomIndustry(value === 'Anders');
      if (value !== 'Anders') {
        setFormData(prev => ({ ...prev, customIndustry: '' }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Prepare data: use customIndustry value if "Anders" was selected
      const finalIndustry = formData.companyIndustry === 'Anders'
        ? formData.customIndustry
        : formData.companyIndustry;

      const submissionData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        role: formData.role,
        companyName: formData.companyName,
        companyAddress: formData.companyAddress,
        companyPostalCode: formData.companyPostalCode,
        companyIndustry: finalIndustry,
        contactEmail: formData.contactEmail,
        contactPhone: formData.contactPhone,
        website: formData.website,
        source: source,
        timestamp: new Date().toISOString()
      };

      const response = await fetch('https://hook.eu1.make.com/6yx8k47vez6pjss2915cjylt1bvcx7iq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        throw new Error('Webhook failed');
      }

      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({
          firstName: '',
          lastName: '',
          role: '',
          companyName: '',
          companyAddress: '',
          companyPostalCode: '',
          companyIndustry: '',
          customIndustry: '',
          contactEmail: '',
          contactPhone: '',
          website: ''
        });
        setShowCustomIndustry(false);
      }, 2000);
    } catch (error) {
      console.error('Lead capture error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-deep-space border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(0,243,255,0.2)] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors z-10"
        >
          <X size={20} className="text-gray-400" />
        </button>

        <div className="p-5 sm:p-8">
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-400">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Bedankt!</h3>
              <p className="text-gray-400">We nemen spoedig contact met u op.</p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                Laten We <span className="text-neon-cyan">Kennismaken</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Vul uw gegevens in en ontdek hoe AI uw bedrijf kan transformeren.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Voornaam <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                      placeholder="Jan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Achternaam <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                      placeholder="de Vries"
                    />
                  </div>
                </div>

                {/* Role */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Functie <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                    placeholder="Eigenaar / Directeur / Manager"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Bedrijfsnaam <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                    placeholder="Uw Bedrijf B.V."
                  />
                </div>

                {/* Company Address and Postal Code Row */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Adres <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyAddress"
                      required
                      value={formData.companyAddress}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                      placeholder="Straat 123, Plaats"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Postcode <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyPostalCode"
                      required
                      value={formData.companyPostalCode}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                      placeholder="1234 AB"
                    />
                  </div>
                </div>

                {/* Company Industry */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Branche <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="companyIndustry"
                    required
                    value={formData.companyIndustry}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                  >
                    <option value="">Selecteer branche</option>
                    <option value="Administratie & Boekhouding">Administratie & Boekhouding</option>
                    <option value="Bouw & Installatie">Bouw & Installatie</option>
                    <option value="E-commerce & Retail">E-commerce & Retail</option>
                    <option value="Financiële Diensten">Financiële Diensten</option>
                    <option value="Gezondheidszorg">Gezondheidszorg</option>
                    <option value="Horeca">Horeca</option>
                    <option value="IT & Technologie">IT & Technologie</option>
                    <option value="Juridische Diensten">Juridische Diensten</option>
                    <option value="Logistiek & Transport">Logistiek & Transport</option>
                    <option value="Marketing & Communicatie">Marketing & Communicatie</option>
                    <option value="Productie & Manufacturing">Productie & Manufacturing</option>
                    <option value="Vastgoed">Vastgoed</option>
                    <option value="Zakelijke Dienstverlening">Zakelijke Dienstverlening</option>
                    <option value="Anders">Anders</option>
                  </select>
                </div>

                {/* Custom Industry Input (shown when "Anders" is selected) */}
                {showCustomIndustry && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Specificeer uw branche <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="customIndustry"
                      required
                      value={formData.customIndustry}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                      placeholder="Vul uw branche in"
                    />
                  </div>
                )}

                {/* Contact Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    E-mailadres <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="contactEmail"
                    required
                    value={formData.contactEmail}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                    placeholder="jan@uwbedrijf.nl"
                  />
                </div>

                {/* Contact Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Telefoonnummer <span className="text-gray-500">(optioneel)</span>
                  </label>
                  <input
                    type="tel"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                    placeholder="+31 6 12345678"
                  />
                </div>

                {/* Website */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Website <span className="text-gray-500">(optioneel)</span>
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                    placeholder="https://www.uwbedrijf.nl"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gradient-to-r from-neon-cyan to-blue-500 text-black font-bold py-4 rounded-lg hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader size={20} className="animate-spin" />
                      Versturen...
                    </>
                  ) : (
                    'Verstuur Gegevens'
                  )}
                </button>

                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center">
                    Er ging iets mis. Probeer het opnieuw.
                  </p>
                )}

                <p className="text-xs text-gray-500 text-center">
                  Uw gegevens worden veilig verwerkt volgens ons privacybeleid.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
